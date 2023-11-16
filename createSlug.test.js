const {test, expect} = require("@jest/globals");
const createSlug = require('./createSlug');
const posts = require('./posts.json');
const { nullableTypeAnnotation } = require("@babel/types");

test("createSlug dovrebbe ritornare una stringa", () => {
    const testo = "ciao"
    const result = createSlug(testo)
    expect(result).toBe("ciao");
})

test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
    const testo = "CIAO"
    const result = createSlug(testo)
    expect(result).toBe("ciao");
})

test("createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const testo = "prova prova"
    const result = createSlug(testo)
    expect(result).toBe("prova-prova");
})

test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const testo = "ciambellone"
    const result = createSlug(testo, posts)
    expect(result).toBe("ciambellone-1");
})

test("createSlug dovrebbe lanciare un errore in caso di titolo non presente o formato errato", () => {
    const titolo = null
    const result = () => createSlug(titolo)
    expect(result).toThrowError("Something went wrong");
})