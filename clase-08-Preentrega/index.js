import { getAllProducts, getProductById, addProduct, deleteProduct } from "./crud.js";

let arg = process.argv.slice(2)

methodRequested(arg)

async function methodRequested(arg) {

    const [method, arg1, argTitle, argPrice, argCategory] = arg

    switch (method) {
        case "GET":
            if (arg1 && arg1 == "products") {
                console.log(await getAllProducts())
            } else if (arg1 && arg1.includes("products/")) {
                const argId = arg1.replace("products/", "")
                console.log(await getProductById(argId))
            } else {
                console.log("bad request: Try with GET products or GET products/{id}");
            }
            break;

        case "POST":
            const productAdded = await addProduct(argTitle, argPrice, argCategory);
            const { title: titleAdded, id: idAdded } = productAdded

            if (arg1 == "products" && idAdded) {
                console.log(`product added: ${titleAdded} with id ${idAdded}`);
            } else {
                console.log(productAdded[0].error);
            }
            break;

        case "DELETE":

            if (arg1 && arg1.includes("products/")) {
                const argId = arg1.replace("products/", "")
                const productDeleted = await deleteProduct(argId)
                const { title: titleDeleted, id: idDeleted } = productDeleted
                if (idDeleted) {
                    console.log(`product ${titleDeleted} with id: ${idDeleted} deleted`)
                } else {
                    console.log(productDeleted);
                }
            } else {
                console.log("bad request: Try with DELETE products/{id}");
            }

            break;

        default:
            console.log("bad request: Try with GET, POST OR DELETE");
            break;
    }
}