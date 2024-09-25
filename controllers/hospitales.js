const { response } = require('express');

const Hospital = require('../models/hospital');
const usuarios = require('../models/usuarios');

const getHospitales = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'getHospitales'
    })
}

const crearHospital = async(req, res = response) => {
    const datos = req.uid;
    const uid = datos.uid;

    const hospital = new Hospital({
        usuario: uid,
        ...req.body
    });

    try {

        const hospitalDB = await hospital.save();   
        
        res.json({
            ok: true,
            hospital: hospitalDB
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const actualizarHospital = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'actualizarHospital'
    })
}

const borrarHospital = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'borrarHospital'
    })
}

module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}