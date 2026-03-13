# Restaurant Management System - PostgreSQL Project

## Project Overview
This project provides a complete PostgreSQL schema and seed data for a restaurant management system. It covers the core operations of a food service business, including supplier management, staff tracking, inventory (ingredients), menu and recipe management, and order processing.

### Main Technologies
- **Database:** PostgreSQL

### Architecture & Schema
The database consists of the following entities:
- **Suppliers:** External vendors for ingredients.
- **Staff:** Employees of the restaurant.
- **Ingredients:** Stock items used in recipes, linked to suppliers.
- **MenuItems:** Food items available for order.
- **RecipeItems:** A join table defining the composition of MenuItems from Ingredients.
- **Orders:** Sales records linked to staff members.
- **OrderItems:** A join table detailing the specific MenuItems and quantities in each order.

## Project Structure
The project follows a specific execution order for setting up and populating the database:
1. **`create-tables.sql`**: The foundational schema definition.
2. **`01_suppliers.sql` through `07_order_items.sql`**: Data insertion scripts populated with mock data. The leading numbers indicate the required order of execution to satisfy foreign key constraints.
3. **`query.sql`**: A collection of SQL queries and exercises used for data analysis (e.g., top-selling items, daily revenue, inventory checks).

## Building and Running

### Prerequisites
- PostgreSQL installed and running.
- A database created (e.g., `CREATE DATABASE restaurant;`).

### Initialization
To set up the database schema and populate it with data, run the following commands in order using `psql`:

```bash
# 1. Create the tables
psql -d restaurant -f create-tables.sql

# 2. Populate data (in order)
psql -d restaurant -f 01_suppliers.sql
psql -d restaurant -f 02_staff.sql
psql -d restaurant -f 03_ingredients.sql
psql -d restaurant -f 04_menu_items.sql
psql -d restaurant -f 05_recipe_items.sql
psql -d restaurant -f 06_orders.sql
psql -d restaurant -f 07_order_items.sql
```

### Running Queries
To execute the analysis queries:
```bash
psql -d restaurant -f query.sql
```

## Development Conventions
- **Naming Conventions:** Table names are PascalCase (e.g., `MenuItems`), and column names use snake_case or standard lowercase (e.g., `supplier_id`).
- **Data Integrity:** Scripts use `TRUNCATE ... RESTART IDENTITY CASCADE` to ensure a clean state before inserting mock data, making them safe to run multiple times during development.
- **Execution Order:** Always follow the numeric prefixing for data scripts to avoid foreign key violations.
