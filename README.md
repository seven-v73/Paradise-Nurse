# Paradise Nursery Shopping Application

Paradise Nursery is an interactive e-commerce web application built using React and Redux Toolkit. It allows plant enthusiasts to browse categorized houseplants, view care descriptions, add items to a dynamic shopping cart, update item quantities, and calculate subtotals in real time.

## Project Structure
- `src/App.jsx` - Landing page with company banner, mission statement, and navigation toggle.
- `src/App.css` - Custom styling and responsive layout for landing page, product cards, navbar, and cart.
- `src/AboutUs.jsx` - Component detailing company vision and passion for houseplants.
- `src/CartSlice.jsx` - Redux Toolkit slice managing cart state (add, remove, update quantities).
- `src/ProductList.jsx` - Product catalog featuring 18 plants across 3 distinct categories with direct cart integration.
- `src/CartItem.jsx` - Detailed shopping cart view featuring item subtotals, quantity adjusters, total cart cost, and checkout simulation.

## Features
- **Dynamic Navbar**: Real-time counter badge reflecting total items in cart across all pages.
- **Categorized Houseplants**: Air Purifying, Aromatic, and Low Maintenance categories with 6 plants each.
- **State Persistence with Redux**: Seamless shopping cart state management across component transitions.
- **Interactive Cart Management**: Dynamic unit incrementing, decrementing, item removal, subtotal calculation, and checkout notifications.

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/seven-v73/Paradise-Nurse
   cd Paradise_Nurse
   npm install
   npm run dev
   ```

The production build can be checked with:

```bash
npm run build
```
