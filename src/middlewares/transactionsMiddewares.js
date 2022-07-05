export async function validateTransaction(req, res, next){
    const { value, type } = req.body;
    if (!value || !type) {
      throw {type: "wrongTransaction", message: "Formato de transacao incorreto"};
    }
    const financialTypes = ["INCOME", "OUTCOME"];
      if (!financialTypes.includes(type)) {
        throw {type: "wrongTransaction", message: "Formato de transacao incorreto"};
      }
  
      if (value < 0) {
        throw {type: "wrongTransaction", message: "Formato de transacao incorreto"};
      }

      next();
};