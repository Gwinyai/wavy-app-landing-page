export const pricingSection = {
  sectionTitle: "Pricing",
  sectionSubTitle: "A Package For Everyone",
  currency: "$",
  planDetails: "Prices include applicable taxes. You can cancel anytime.",
  plan1: {
    included: true,
    name: "Free",
    price: 0,
    unit: "per month",
    features: ["Free Icons", "Free Images", "Free Template"],
  },
  plan2: {
    included: true,
    name: "Starter",
    price: 2.5,
    unit: "per month",
    features: ["Support", "Customization", "Blog"],
  },
  bestValuePlan: {
    included: true,
    name: "Deluxe",
    price: 2.5,
    unit: "per month",
    features: ["Deployment", "Premium Support", "Web Panel", "Analytics"],
  },
};

/*
DOCUMENTATION

In this section, you can display up to 3 different pricing plans.  

--sectionTitle
    The title of this section.
--sectionSubTitle
    The subtitle of this section.
--currency
    The currency unit of your product. The default is the $ symbol.
--planDetails
    This is a notice of any conditions around the pricing.
--plan1
    The first pricing plan.
    --include
    Make include "true" if you would like this pricing plan to be displayed. Make it false if you want it hidden.
    --name
    The name of the pricing plan.
    --price
    The price of the plan
    --unit
    The type of cost per unit of the plan
    --features
    Specify the benefits of this plan
--plan2
    The second pricing plan.
    --include
    Make include "true" if you would like this pricing plan to be displayed. Make it false if you want it hidden.
    --name
    The name of the pricing plan.
    --price
    The price of the plan
    --unit
    The type of cost per unit of the plan
    --features
    Specify the benefits of this plan
--bestValuePlan
    This is your best offer pricing plan.
    --include
    Make include "true" if you would like this pricing plan to be displayed. Make it false if you want it hidden.
    --name
    The name of the pricing plan.
    --price
    The price of the plan
    --unit
    The type of cost per unit of the plan
    --features
    Specify the benefits of this plan
*/
