
//model
const USER = require('../models/user');
//service
const userService = require('../service/user')
//constant
const ERROR_MESSAGE = require('../constants/error-message')
const SUCCESS_MESSAGE = require('../constants/success-message')

const REGISTER = async (req, res) => {
    try {
        const response = await userService.REGISTER(req.body)

        return res.json({...SUCCESS_MESSAGE.USER_SUCCESS_REGISTRATION, response})
    } catch (error) {
        if(error) res.json(error)
        console.log(error)
    }
}

const LOGIN = async (req, res) => {
    try {

        const response = await userService.LOGIN(req.body)

        return res.json({...SUCCESS_MESSAGE.USER_LOGIN_SUCCESS, response})
    } catch (error) {
        if(error) res.json(error)
        console.log(error)
    }
}

const UPDATE_USER = async (req, res) => {
    try {
        const response = await userService.UPDATE_USER(req.body, req.query)

        return res.json({...SUCCESS_MESSAGE.USER_UPDATE_SUCCESS, response})
    } catch (error) {
        if(error) res.json(error)
        console.log(error)
    }
}

const DELETE_USER = async (req, res) => {
    try {
        await userService.DELETE_USER(req.body)

        return res.json({...SUCCESS_MESSAGE.DELETE_SUCCESSFULLY})
    } catch (error) {
        if(error) res.json(error)
        console.log(error)
    }
}

const GET_USER = async (req, res) => {
    try {
        const response = await userService.GET_USER(req.query)

        return res.json({...SUCCESS_MESSAGE.FETCH_SUCCESS, response})
    } catch (error) {
        if(error) res.json(error)
        console.log(error)
    }
}

const GET_ALL_USER = async (req, res) => {
    try {
        const response = await userService.GET_ALL_USER()

        return res.json({...SUCCESS_MESSAGE.FETCH_SUCCESS, response})
    } catch (error) {
        if(error) res.json(error)
        console.log(error)
    }
}

module.exports = {
    REGISTER,
    LOGIN,
    DELETE_USER,
    UPDATE_USER,
    GET_USER,
    GET_ALL_USER,
}