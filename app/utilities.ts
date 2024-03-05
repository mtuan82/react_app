
export function isExpiredToken(token: any): boolean {
    if (token == undefined || token == "")
        return false;
    // JWT exp is in seconds
    var dateNow = new Date().getTime();
    var exp = Date.parse(token.exp);

    if (exp < dateNow) {
        console.log("Token expired. " + exp);
        return false;
    } else {
        console.log("Valid token");
        return true;
    }
}