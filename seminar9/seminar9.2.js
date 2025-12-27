router
    .route("/employees/:id")
    .get(async (req, res) => {
        const employee = await Employee.findOne({
            where: { id: req.params.id },
        });
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
            return res.status(200).json(await employee.update(req.body));
        } else {
            return res
                .status(404)
                .json({ error: `Employee with id ${req.params.id} does not exists` });
        }
    })
    .delete(async (req, res) => {
        try {
            const employee = await Employee.findByPk(req.params.id);

            if (employee) {
                await employee.destroy();
                return res.status(200).json({ message: "deleted" });
            } else {
                return res
                    .status(404)
                    .json({ error: `Employee with id ${req.params.id} does not exists` });
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    });
