// const asyncHandler = (fn) => async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(500).json(error)
//         console.log(error);
//     }
// }
//or this way

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}