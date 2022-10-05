
module.exports.getRender = async function ( req , res ) {

    try {

        return res.render('index');

    }
    catch ( error ) {

        console.log(error );
        res.send({
            status : false ,
            error : error?.message || "Unable to proceed your request please try again later"
        })

    }
}