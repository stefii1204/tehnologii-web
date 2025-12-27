const { Op } = require("sequelize");
const Employee = require("../models/employee");
const router = require("express").Router();

router
    .route("/employees")
    .get(async (req, res) => {
        const { minSalary, simplified, name } = req.query;

        try {
            const whereCondition = {};

            if (minSalary) {
                whereCondition.salary = { [Op.gt]: minSalary };
            }
            if (name) {
                whereCondition.firstName = {
                    [Op.like]: `%${name}%`,
                };
            }

            const order = [];
            if (sortBy) {
                order.push([
                    sortBy,
                    sortOrder && sortOrder.toLowerCase() === "desc" ? "DESC" : "ASC",
                ]);
            }

            const employees = await Employee.findAll({
                where: Object.keys(whereCondition).length
                    ? whereCondition
                    : undefined,
                attributes: simplified ? { exclude: ["id"] } : undefined,
            });

            return res.status(200).json(employees);
        } catch (err) {
            return res.status(500).json(err);
        }
    })

    .post(async (req, res) => {
        try {
            const newEmployee = await Employee.create(req.body);
            return res.status(200).json(newEmployee);
        } catch (err) {
            return res.status(500).json(err);
        }
    });

router
    .route("/employees/:id")

    .get(async (req, res) => {
        const employee = await Employee.findByPk(req.params.id);

        if (employee) {
            return res.status(200).json(employee);
        } else {
            return res
                .status(404)
                .json({ error: `Employee with id ${req.params.id} does not exists` });
        }
    })

    .put(async (req, res) => {
        const employee = await Employee.findByPk(req.params.id);

        if (employee) {
            const updatedEmployee = await employee.update(req.body);
            return res.status(200).json(updatedEmployee);
        } else {
            return res
                .status(404)
                .json({ error: `Employee with id ${req.params.id} does not exists` });
        }
    })

    .delete(async (req, res) => {
        const employee = await Employee.findByPk(req.params.id);

        if (employee) {
            await employee.destroy();
            return res.status(200).json({ message: "deleted" });
        } else {
            return res
                .status(404)
                .json({ error: `Employee with id ${req.params.id} does not exists` });
        }
    });

module.exports = router;
