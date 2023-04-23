import {Category} from "@/types";
import {categoryMapper} from "@/app/helpers/categoryMapper";
import {getEntries} from "@/app/helpers/connector";

export async function getCategories() {
    return (await getEntries<Category>(`category`)).map(categoryMapper);
}

export async function getCategoriesForStaticBuild() {
    const categories = await getCategories();
    return categories.map((category) => ({
        category: category.slug,
    }));
}
