Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,
    /*
    data : [
        {id: 1, name: 'Ed Spencer', email: 'test@test.com'},
        {id: 2, name: 'Tommy Maintz', email: 'test@test.com'},
        {id: 3, name: 'Aaron Conran', email: 'test@test.com'},
        {id: 4, name: 'Jamie Avins', email: 'test@test.com'}
    ]
    */

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }

});