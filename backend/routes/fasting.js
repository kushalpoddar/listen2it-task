const dayjs = require('dayjs')
const express = require('express')
const router = express.Router()
const {
    getFastingTypes, 
    getFastingData, 
    createFastingData,  
} = require('../controller/fasting')
const auth = require('../middleware/auth')

//Get all fasting data
router.get('/', async(req, res) => {
    const fasting_data = await getFastingData()
	return res.send(fasting_data)
})

//Get all fasting types
router.get('/types', async(req, res) => {
    const fasting_types = await getFastingTypes()
	return res.send(fasting_types)
})

//Summary
router.get('/summary', auth, async(req, res) => {
    let fasting_data = await getFastingData({user : req.user_token_details})
    fasting_data = fasting_data.map(fd => {
        return {
            ...fd, duration : dayjs(fd.ended_at).diff(dayjs(fd.started_at))/1000
        }
    })

    let prev_started_at = null
    let streak = [[]]
    for(let frow_i in fasting_data){
        const frow = fasting_data[frow_i]
        if(!prev_started_at){
            // If starting new streak
            streak[streak.length - 1].push(frow)
            prev_started_at = frow.started_at
            continue
        }
        // Checking if current started_at lies outside of 24 hours
        if(dayjs(prev_started_at).diff(dayjs(frow.started_at)) > (24*3600*1000)){
            streak.push([])
        }

        streak[streak.length - 1].push(frow)
        prev_started_at = frow.started_at
    }
    
    const streaks = streak.map(single_streak => {
        return {
            days : single_streak.length,
            streak : single_streak
        }
    })

    const seven_day = [...fasting_data.slice(0, 7).map(fd => fd.duration)]
    const data = [{
        title : "Total Fasts",
        value : fasting_data.length
    },{
        title : "7-fast avg",
        value : seven_day.length ? `${Math.round(((seven_day.reduce((a,b) => a + b, 0) / seven_day.length)/3600)*10)/10}h` : "0h"
    },{
        title : "Longest Fast",
        value : fasting_data.length ? `${Math.round(((Math.max(...fasting_data.map(fd => fd.duration)))/3600)*10)/10}h` : "0h"
    },{
        title : "Longest Streak",
        value : Math.max(...streaks.map(fd => fd.days))
    },{
        title : "Current Streak",
        value : streaks[0].days
    }]
	return res.send(data)
})

//Recent Fasts
router.get('/recent', auth, async(req, res) => {
    let fasting_data = await getFastingData({user : req.user_token_details})
    fasting_data = fasting_data.map(fd => {
        return {
            ...fd, duration : Math.round((dayjs(fd.ended_at).diff(dayjs(fd.started_at))/(1000*3600))*10)/10
        }
    })

    const seven_day = fasting_data.slice(0, 7)
	return res.send(seven_day)
})

//Insert fasting data
router.post('/', auth, async(req, res) => {
    const fasting_data = await createFastingData({ data : req.body, user : req.user_token_details })
	return res.send(fasting_data)
})

module.exports = router