/**
 * @file - Server Configuration.
 * @author - Antonio Fazari
 *
 * Holds configuration for the http server.
 */
module.exports = {
  // Configure port for server to listen on.
  port: process.env.PORT || 3000,
  // Configure environment
  env: process.env.NODE_ENV || 'development',
}
