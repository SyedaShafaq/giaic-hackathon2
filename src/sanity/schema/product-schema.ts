 import { defineField , defineType } from "sanity";
 export const ProductDetails = defineType({
    name:"ProductDetails",
    title: "Product Details",
    type: "document",
    fields:[
        defineField({
            name: "name",
            title: "Product Name",
            type: "string"
        },
    ),
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "name",
             
        },
    },

    {
        name: "images",
        title: "Product Image",
        type: "array",
        of: [{type: "image"}],
    },
    {
        name: "description",
        title: "Product Description",
        type: "string"
    },
    {
        name: "price",
        title: "Product Price",
        type: "number"
    },

    ]
})
        