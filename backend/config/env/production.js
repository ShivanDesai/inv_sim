`use strict`

module.exports = {
	session: process.env.SESSION || 'secret-token',
	token: process.env.TOKEN || 'secret-jwt-token',
	database: {
		mongoDbUrl: process.env.MONGODB_URL || 'put-mongo-url-here',
		name: process.env.DATABASE || 'invoice-simplifier',
		user: process.env.DB_USERNAME || 'put-rds-userid-here',
		password: process.env.DB_PASSWORD || 'put-rds-password-here',
		host: process.env.DB_HOST || 'put-rds-host-here',
		port: process.env.DB_DBPORT || '3306',
		dialect: process.env.DB_DIALECT || 'mysql'
	}
}
