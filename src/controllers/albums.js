const albums = [];
let counter = 0;

class Albums {

    static getAll(req, res) {
        res.json(albums);
    }

    static create(req, res) {
        counter++;
        albums.push({
            id: counter,
            title: req.body.title,
            date: req.body.date
        });
        res.sendStatus(201);
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        const index = albums.findIndex(t => t.id === id);
        if (index < 0) {
            res.sendStatus(404);
            return;
        }
        albums.splice(index, 1);
        res.sendStatus(204);
    }
    
    static edit(req, res) {
        const id = parseInt(req.params.id);
        const index = albums.findIndex(t => t.id === id);
        if (index < 0) {
            res.sendStatus(404);
            return;
        }
        albums[index] = {
            id,
            title: req.body.title,
            date: req.body.date
        };
        res.sendStatus(200)
    }

}

module.exports = Albums;