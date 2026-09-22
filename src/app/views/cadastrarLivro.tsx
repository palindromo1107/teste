import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12, },
    botoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, },
    botao: { flex: 1, padding: 14, borderRadius: 8, alignItems: 'center', },
    botaoCancelar: { marginRight: 5, backgroundColor: '#777', },
    botaoSalvar: { marginLeft: 5, backgroundColor: '#2196F3', },
    textoBotao: { color: '#fff', fontWeight: 'bold', },
});

const [formData, setFormData] = useState({
    id: 0,
    titulo: "",
    autor: "",
    ano_publicacao: "",
    preco: "",
    categoria: ""
})
const [livros, setLivros] = useState([
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        ano_publicacao: "1899",
        preco: "29.90",
        categoria: "1"
    },
    {
        id: 2,
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        ano_publicacao: "1890",
        preco: "34.90",
        categoria: "1"
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        ano_publicacao: 1949,
        preco: 39.90,
        categoria: "2"
    },
    {
        id: 4,
        titulo: "O Hobbit",
        autor: "J. R. R. Tolkien",
        ano_publicacao: "1937",
        preco: "44.90",
        categoria: "3"
    },
    {
        id: 5,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J. K. Rowling",
        ano_publicacao: "1997",
        preco: "49.90",
        categoria: "3"
    },
    {
        id: 6,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano_publicacao: "1943",
        preco: "24.90",
        categoria: "4"
    },
    {
        id: 7,
        titulo: "A Revolução dos Bichos",
        autor: "George Orwell",
        ano_publicacao: "1945",
        preco: "32.90",
        categoria: "2"
    },
    {
        id: 8,
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano_publicacao: "1813",
        preco: "37.90",
        categoria: "5"
    },
    {
        id: 9,
        titulo: "O Senhor dos Anéis",
        autor: "J. R. R. Tolkien",
        ano_publicacao: "1954",
        preco: "59.90",
        categoria: "3"
    },
    {
        id: 11,
        titulo: "Memórias Póstumas de Brás Cubas",
        autor: "Machado de Assis",
        ano_publicacao: "1881",
        preco: "31.90",
        categoria: "1"
    }
])

const handleSave = () => {

    if (formData.id === 0) {
        const novoId = livros.length > 0
            ? Math.max(...livros.map(livro => livro.id)) + 1
            : 1;

        const novoLivro = {
            id: novoId,
            titulo: formData.titulo,
            autor: formData.autor,
            ano_publicacao: Number(formData.ano_publicacao),
            preco: Number(formData.preco),
            categoria: formData.categoria
        };
        setLivros([...livros, novoLivro]);

    } else {
        setLivros(
            livros.map(livro =>
                livro.id === formData.id
                    ? {
                        ...livro,
                        titulo: formData.titulo,
                        autor: formData.autor,
                        ano_publicacao: Number(formData.ano_publicacao),
                        preco: Number(formData.preco),
                        categoria: formData.categoria
                    }
                    : livro
            )
        );
    }

    setFormData({
        id: 0,
        titulo: "",
        autor: "",
        ano_publicacao: "",
        preco: "",
        categoria: ""
    });

    router.push('/listarLivros')
}

const cadastrarLivro = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastrar Livro </Text>
            <TextInput style={styles.input}
                placeholder="Título"
                value={formData.titulo}
                onChangeText={(value) => setFormData({ ...formData, titulo: value })} />

            <TextInput style={styles.input}
                placeholder="Autor" value={formData.autor}
                onChangeText={(value) => setFormData({ ...formData, autor: value })} />

            <TextInput style={styles.input}
                placeholder="Ano de publicação"
                keyboardType="numeric"
                value={formData.ano_publicacao}
                onChangeText={(value) => setFormData({ ...formData, ano_publicacao: value })} />

            <TextInput style={styles.input}
                placeholder="Preço"
                keyboardType="decimal-pad"
                value={formData.preco}
                onChangeText={(value) => setFormData({ ...formData, preco: value })} />

            <TextInput style={styles.input}
                placeholder="Categoria"
                value={formData.categoria}
                onChangeText={(value) => setFormData({ ...formData, categoria: value })} />

            <View style={styles.botoes}>
                <Pressable style={[styles.botao, styles.botaoCancelar]}
                    onPress={() => router.back()} >
                    <Text style={styles.textoBotao}> Cancelar </Text>
                </Pressable>
                <Pressable style={[styles.botao, styles.botaoSalvar]}
                    onPress={handleSave} >
                    <Text style={styles.textoBotao}> Salvar </Text>
                </Pressable>
            </View>
        </View >
    )
}

export default cadastrarLivro