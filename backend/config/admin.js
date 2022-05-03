module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c93a7bb9c0ae861907bdd323ebe36b50'),
  },
});
