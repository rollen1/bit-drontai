function getId(key) {
    const keyName = key + '_id';
    let id = localStorage.getItem(keyName);
    if (null === id) {
        id = 0;
    } else {
        id = parseInt(id);
    }
    id++;
    localStorage.setItem(keyName, id);
    return id;
}

// mode = 0 ===> read all
// mode = 'list' ===> only NOT deleted
// mode = 'bin' ====> only DELETED

function readData(key, mode = 0) {
    const data = localStorage.getItem(key);
    if (null === data) {
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
    if ('list' === mode) {
        return (JSON.parse(data)).filter(d => !d.deleted);
    }
    if ('bin' === mode) {
        return (JSON.parse(data)).filter(d => d.deleted);
    }
    return JSON.parse(data);
}

function writeData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// CRUD

export function create(key, data) {
    const d = readData(key);
    data.id = getId(key);
    data.deleted = 0;
    d.push(data);
    writeData(key, d);
}

export function read(key, mode = 0) {
    return readData(key, mode);
}

export function update(key, data, id) {
    const d = readData(key);
    writeData(key, d.map(t => t.id === id ? { ...t, ...data, id: id } : { ...t }));
}

export function destroy(key, id) {
    const d = readData(key);
    writeData(key, d.filter(t => t.id !== id));
}

export function softDelete(key, id) {
    const d = readData(key);
    writeData(key, d.map(t => t.id === id ? { ...t, deleted: 1 } : { ...t }));
}

export function restore(key, id) {
    const d = readData(key);
    writeData(key, d.map(t => t.id === id ? { ...t, deleted: 0 } : { ...t }));
}




