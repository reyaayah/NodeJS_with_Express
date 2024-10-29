const db = require("../config/db");

const getStudents = async (req, res) => {
    try {
        const data = await db.query("SELECT * FROM std_tbl")
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "No records found"
            })
        }
        res.status(200).send({
            success: true,
            message: "all students Records",
            totalStudents: data[0].length,
            data: data[0],
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in get all studentd API"
        })
    }
}
module.exports = { getStudents };