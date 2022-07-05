export async function validateSignUp(req, res, next){
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        throw {
            type: "emptyField", message: "Voce deve preencher todos os campos!"
        };
    }
    next();
};

export async function validateSignIn(req, res, next){
    const { email, password } = req.body;
    if (!email || !password) {
        throw {
            type: "emptyField", message: "Voce deve preencher todos os campos!"
        };
    };
    next();
};

export async function validateToken(req, res, next){
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    if (!token) {
      throw{ type: "naoAutorizado" , message: "nao foi possivel validar o seu token"};
    }
    let user;
    user = jwt.verify(token, process.env.JWT_SECRET);
    if(user.error){
        throw{ type: "naoAutorizado" , message: "nao foi possivel validar o seu token"};
    }
    user = res.locals.user;
    next();
};