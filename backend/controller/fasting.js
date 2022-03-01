const conn = require('../conn')

const getFastingTypes = () => {
    const query = "SELECT * FROM fasting_types"
    return new Promise((resolve, reject) => {
        conn.query(query, (err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }
            return resolve(data)
        })
    })
}

const getFastingData = () => {
    const query = "SELECT * FROM fasting ORDER BY started_at DESC"
    return new Promise((resolve, reject) => {
        conn.query(query, (err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }
            return resolve(data)
        })
    })
}

const getFastingDetails = (id) => {
    const query = "SELECT * FROM fasting WHERE id = ?"
    return new Promise((resolve, reject) => {
        conn.query(query, [id], async(err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }

            return resolve(data)
        })
    })
}

const createFastingData = ({data}) => {
    const query = "INSERT INTO fasting(type, started_at, ended_at) value(?, ?, ?)"
    return new Promise((resolve, reject) => {
        conn.query(query, [data.type, data.started_at, data.ended_at], async(err, data) => {
            if(err){
                console.error(err)
                return reject(err)
            }

            const fasting_details = await getFastingDetails(data.insertId)
            return resolve(fasting_details)
        })
    })
}

module.exports = {
    getFastingTypes,
    getFastingData,
    createFastingData,
    getFastingDetails
}