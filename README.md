


# koinx
Implemented the following funtionality -
- A user would enter the purchase price, sale price, expenses, investment type and
annual income, and the application should be able to calculate their gains, tax rate
and taxes according to the logic below:
- Tax Rate should be shown according to the image* at the end of this
document. The “Income” column in the image should be given as input
dropdown in the “Annual Income” section. The tax rate should change as the
user changes their annual income.
- Capital Gains Amount will be calculated as (Sale Price - Purchase Price -
Expenses).
- If “Investment Type” is selected as “Long Term”, then “Discount for Long Term
Gains” would be calculated as 50% of “Capital Gains Amount”, only if “Capital
Gains Amount” is a positive value. If “Investment Type” is selected as “Short
Term”, then the section with “Capital Gains Amount” and “Discount for Long
Term Gains” would be hidden, as shown in the figma design on the right side.
- Net Capital Gains would be calculated as (Capital Gains Amount - Discount
for Long Term Gains) in case of Long Term and according to point (b) in case
of Short Term.
- Tax to be paid will be calculated according to the image below
![image](https://github.com/HarshDeswal/koinx/assets/94471009/73d42d64-18d8-4a71-8258-3fc9b95ae997)

# Important point
- There is no submit button , as soon as user enter the purchase price, sale price, expenses, investment type and
annual income , value are dynamically calculated.


