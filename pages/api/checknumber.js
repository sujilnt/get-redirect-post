import {validate} from "../../middleware/validate";
import {NumberValidation} from "../../schemas/numberValidation";

function handler(req, res) {
    try{
        const {method} = req;
        switch (method) {
            case 'POST':
                res.redirect(308, `/success/${req.body}`);
                break;
            default:
                res.setHeader('Allow', ['POST'])
                res.status(405).end(`Method ${method} Not Allowed`)
        }
    }catch (e) {
        console.error(e)
    }
}

export default validate(NumberValidation, handler)
