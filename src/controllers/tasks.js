const tasks = [];
let counter = 0;

class Tasks {

    static getAll(req, res) {
        res.json(tasks);
    }
    static create(req, res) {
        counter++;
        tasks.push({
            id: counter,
            title: req.body.title
        });
        res.sendStatus(201);
    }
    static delete(req, res) {
        const id = parseInt(req.params.id);
        const index = tasks.findIndex(t => t.id === id);
        if (index < 0) {
            res.sendStatus(404);
            return;
        }
        tasks.splice(index, 1);
        res.sendStatus(204);
    }
    static edit(req, res) {
        const id = parseInt(req.params.id);
        const index = tasks.findIndex(t => t.id === id);
        if (index < 0) {
            res.sendStatus(404);
            return;
        }
        tasks[index] = {
            id,
            title: req.body.title
        };
        res.sendStatus(200)
    }


}

module.exports = Tasks;