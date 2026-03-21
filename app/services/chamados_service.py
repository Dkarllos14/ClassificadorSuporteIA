from app.core.database import get_connection


def salvar_chamado(
    assunto: str,
    descricao: str,
    categoria: str,
    prioridade: str,
    impacto: str,
    solucao: str
):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO chamados (
            assunto,
            descricao,
            categoria,
            prioridade,
            impacto,
            solucao
        )
        VALUES (?, ?, ?, ?, ?, ?)
    """, (assunto, descricao, categoria, prioridade, impacto, solucao))

    conn.commit()
    conn.close()


def listar_chamados(
    categoria: str | None = None,
    prioridade: str | None = None,
    limit: int = 10,
    offset: int = 0
):
    conn = get_connection()
    cursor = conn.cursor()

    query = """
        SELECT
            id,
            assunto,
            descricao,
            categoria,
            prioridade,
            impacto,
            solucao,
            criado_em
        FROM chamados
    """

    filtros = []
    parametros = []

    if categoria:
        filtros.append("categoria = ?")
        parametros.append(categoria.upper())

    if prioridade:
        filtros.append("prioridade = ?")
        parametros.append(prioridade.upper())

    if filtros:
        query += " WHERE " + " AND ".join(filtros)

    query += " ORDER BY id DESC LIMIT ? OFFSET ?"
    parametros.extend([limit, offset])

    cursor.execute(query, parametros)

    resultados = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return resultados


def buscar_chamado_por_id(chamado_id: int):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            id,
            assunto,
            descricao,
            categoria,
            prioridade,
            impacto,
            solucao,
            criado_em
        FROM chamados
        WHERE id = ?
    """, (chamado_id,))

    resultado = cursor.fetchone()
    conn.close()

    if resultado is None:
        return None

    return dict(resultado)