const {modelName} = require({modelPath});

/**
 * {controllerName}.js
 *
 * @description :: Server-side logic for managing {pluralName}.
 */
module.exports = {

    /**
     * {controllerName}.list()
     */
    list: async function (req, res) {
        const all = await {modelName}.find({})

        return res.json(all);

    },

    /**
     * {controllerName}.show()
     */
    show: async function (req, res) {
        const id = req.params.id;
        const {name} = await {modelName}.findOne({ _id: id }).exec()
        if ({name} != null) {
            return res.json({name});
        } else {
            return res.json({ "message": "not found !" });
        }

  
    },

    /**
     * {controllerName}.create()
     */
    create: async function (req, res) {
        const {name} = new {modelName}({{createFields}});
            try {
                await {modelName}.create({name});
        return res.status(201).json({name})
            } catch (e) {
            return res.status(400).json({ "message": "Error" + e })

        }

},

/**
 * {controllerName}.update()
 */
update: async function (req, res) {
    const id = req.params.id;
    const {name} = await {modelName}.findOne({ _id: id }).exec()
    if ({name} != null) {
        // update
        {updateFields}
        await {modelName}.updateOne({_id: id },{name}).exec()
        return res.json({name});
    } else {
        // create
        return res.status(400).json({ "message": "Error" })
       
    }
},

/**
 * {controllerName}.remove()
 */
remove: async function (req, res) {
    const id = req.params.id;
   await {modelName}.findByIdAndDelete(id).exec();
        return res.status(204).json();

}
};