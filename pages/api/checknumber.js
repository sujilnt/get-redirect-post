import {validate} from "../../middleware/validate";
import {NumberValidation} from "../../schemas/numberValidation";

function handler(req, res) {
    try{
        const {method,body} = req;

        switch (method) {
            case 'POST':
                res.redirect(308, `/success/${body}`);
                break;
            default:
                res.status(405).end(`Method ${method} Not Allowed`)
        }
    }catch (e) {
        res.status(401);
    }
}

export default validate(NumberValidation, handler)
