'use strict'

import Users from '../../../models/mongoDB/users'
import constants from '../../../utils/constants'
import mongoose from 'mongoose'

/**
 * Create user and save data in database.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.createUser = async (req, res) => {
	let createdUser,
		filter = {},
		resObj = {}
	try {
		filter.email = req.body.email

		let user = await Users.findOne(filter)
		if (user) {
			let token = user.generateToken()
			user = user.toJSON()
			user.token = token
		} else {
			let newUser = new Users(req.body)
			createdUser = await newUser.save()
			const token = createdUser.generateToken()
			createdUser = createdUser.toJSON()
			createdUser.token = token
		}
		resObj = user || createdUser
		return res.status(constants.STATUS_CODE.SUCCESS_STATUS).send(resObj)
	} catch (error) {
		console.log(`Error while creating user ${error}`)
		return res.status(constants.STATUS_CODE.INTERNAL_SERVER_ERROR_STATUS).send(error.message)
	}
}

/**
 * Login user and send auth token and user details in response.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.loginUser = async (req, res) => {
	try {
		var user,
			isAuth = false

		user = await Users.findOne({ email: req.body.loginId })

		if (user) {
			const validate = await user.validatePassword(req.body.password)
			if (validate) {
				const token = user.generateToken()
				user = user.toJSON()
				delete user.password
				user.token = token
				isAuth = true
				return res.status(constants.STATUS_CODE.SUCCESS_STATUS).send(user)
			}
		}
		if (!isAuth) {
			return res.status(constants.STATUS_CODE.UNAUTHORIZED_ERROR_STATUS).send(constants.MESSAGES.AUTHORIZATION_FAILED)
		}
	} catch (error) {
		console.log(`Error while logging in user ${error}`)
		return res.status(constants.STATUS_CODE.INTERNAL_SERVER_ERROR_STATUS).send(error.message)
	}
}

/**
 * Get user profile details based on userid.
 * @param  {Object} req request object
 * @param  {Object} res response object
 */
exports.getUserProfile = async (req, res) => {
	try {
		let details = await Users.findById(mongoose.Types.ObjectId(req.params.userId))
		if (details) {
			details = details.toJSON()
			delete details.password
			return res.status(200).send(details)
		} else {
			return res.status(204).json()
		}
	} catch (error) {
		console.log(`Error while getting user profile details ${error}`)
		return res.status(constants.STATUS_CODE.INTERNAL_SERVER_ERROR_STATUS).send(error.message)
	}
}