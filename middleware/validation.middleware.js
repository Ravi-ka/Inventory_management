import {body,validationResult} from 'express-validator';

const validatorRequest = async (req, res, next)=>{
            // 1. Setup rules for validation - within array
            const rules = [
                body('name').isEmpty().withMessage('Name is required'),
                body('price').isFloat({gt:0}).withMessage('Price should be in positive value'),
                body('imgUrl').isURL().withMessage('Invalid Image URL')
            ];
            // 2. Run those rules
            await Promise.all(rules.map((rule)=>rule.run(req)));

            // 3. Check if there are any errors after running the rules
            var validationErrors = validationResult(req);
            
            // 4. If there are any errors return the message
            if(!validationErrors.isEmpty()){
                return res.render('new-product',{errorMessage: validationErrors.array()[0].msg});
            }
}

export default validatorRequest;
