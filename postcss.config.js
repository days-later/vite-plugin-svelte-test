
module.exports = {
    plugins: [
        // expected to pick up on .browserslistrc:
        require( 'autoprefixer' ),

        // would work as expected
        //require( 'autoprefixer' )({ overrideBrowserslist: 'safari 12' }),
    ],
}
