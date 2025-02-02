interface OrderField {
    name: string;
    type: string;
    title: string;
    optional?: boolean;
    description?: string;
    validation?: (Rule: any) => any;
    of?: Array<{ type: string; to?: Array<{ type: string }> }>;
    options?: { list: Array<{ value: string; title: string }> };
    layout?: string;
    initialValue?: string;
}

interface OrderSchema {
    name: string;
    type: string;
    title: string;
    fields: OrderField[];
}

const orderSchema: OrderSchema = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        { name: "firstName", type: "string", title: "First Name" },
        { name: "lastName", type: "string", title: "Last Name" },
        { name: "address", type: "string", title: "Address" },
        { name: "city", type: "string", title: "City" },
        { name: "zipCode", type: "string", title: "Zip Code" },
        { name: "email", type: "string", title: "Email Address" },
        { name: "phoneNumber", type: "string", title: "Phone Number" },
        { name: "province", type: "string", title: "Province" },
        { name: "companyName", type: "string", title: "Company Name", optional: true },
        {
            name: "cartItems",
            title: "Cart Items",
            description: "Items added to the cart",
            validation: (Rule) => Rule.required(),
            type: "array",
            of: [{ type: "reference", to: [{ type: "product" }] }],
        },
        { name: "total", type: "number", title: "Total" },
        {
            name: "status",
            type: "string",
            title: "Status",
            options: {
                list: [
                    { value: "pending", title: "Pending" },
                    { value: "processing", title: "Processing" },
                    { value: "shipped", title: "Shipped" },
                    { value: "delivered", title: "Delivered" },
                    { value: "cancelled", title: "Cancelled" },
                ],
            },
            validation: (Rule) => Rule.required(),
            layout: "radio",
            initialValue: "pending",
        },
    ],
};

export default orderSchema;
