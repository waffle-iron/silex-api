define({ "api": [
  {
    "type": "delete",
    "url": "/fabricante/:id",
    "title": "Remove Fabricante por ID",
    "name": "DeleteFabricante",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Fabricante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"Fabricante Removido.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Fabricante"
  },
  {
    "type": "get",
    "url": "/fabricante",
    "title": "Busca todos os Fabricantes",
    "name": "GetFabricante",
    "group": "Fabricante",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Todos os Fabricantes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": [\n      {\n        \"id\": 3,\n        \"nome\": \"Fabricante 1\"\n      },\n      {\n        \"id\": 4,\n        \"nome\": \"Fabricante 2\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Fabricante"
  },
  {
    "type": "get",
    "url": "/fabricante/:id",
    "title": "Busca Fabricante por ID",
    "name": "GetFabricanteById",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Fabricante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Fabricante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Fabricante 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boelan",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Fabricante"
  },
  {
    "type": "post",
    "url": "/fabricante",
    "title": "Adiciona novo Fabricante",
    "name": "PostFabricante",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Fabricante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Fabricante criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Fabricante 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boelan",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Fabricante"
  },
  {
    "type": "put",
    "url": "/fabricante/:id",
    "title": "Atualiza Fabricante por ID",
    "name": "PutFabricante",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Fabricante</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Fabricante</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Fabricante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Fabricante 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Fabricante"
  },
  {
    "type": "delete",
    "url": "/filial/:id",
    "title": "Remove Filial por ID",
    "name": "DeleteFilial",
    "group": "Filial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico da Filial</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"Filial Removida\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Filial"
  },
  {
    "type": "get",
    "url": "/filial",
    "title": "Busca todas as Filiais",
    "name": "GetFilial",
    "group": "Filial",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Todas as Filiais</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"response\": [\n      {\n        \"id\": 1,\n        \"nome\": \"Filial 1\"\n      },\n      {\n        \"id\": 2,\n        \"nome\": \"Filial 2\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Filial"
  },
  {
    "type": "get",
    "url": "/filial/:id",
    "title": "Busca Filial por ID",
    "name": "GetFilialById",
    "group": "Filial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico da Filial</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados da Filial</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Filial 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Filial"
  },
  {
    "type": "post",
    "url": "/filial",
    "title": "Adiciona nova Filial",
    "name": "PostFilial",
    "group": "Filial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da Filial</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados da Filial criada</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Filial 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Filial"
  },
  {
    "type": "put",
    "url": "/filial/:id",
    "title": "Atualiza Filial por ID",
    "name": "PutFilial",
    "group": "Filial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico da Filial</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome da Filial</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados da Filial</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Filial 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Filial"
  },
  {
    "type": "delete",
    "url": "/produto/:id",
    "title": "Remove Produto por ID",
    "name": "DeleteProduto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Produto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"Fabricante Removido.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  },
  {
    "type": "get",
    "url": "/estoque/:produto_id/:filial_id",
    "title": "Estoque por filial",
    "name": "GetEstoqueByFilial",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "produto_id",
            "description": "<p>ID do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "filial_id",
            "description": "<p>ID da Filial</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Estoque</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"response\": [\n      {\n          \"id\": 2,\n          \"quantidade\": 10,\n          \"filial\": {\n               \"id\": 1,\n               \"nome\": \"Filial 1\"\n          }\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  },
  {
    "type": "get",
    "url": "/estoque/:produto_id",
    "title": "Estoque em todas as Filiais",
    "name": "GetEstoqueByProduto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "produto_id",
            "description": "<p>ID do Produto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Estoque</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"response\": [\n      {\n          \"id\": 2,\n          \"quantidade\": 10,\n          \"filial\": {\n               \"id\": 1,\n               \"nome\": \"Filial 1\"\n          }\n      },\n      {\n          \"id\": 2,\n          \"quantidade\": 20,\n          \"filial\": {\n               \"id\": 2,\n               \"nome\": \"Filial 2\"\n          }\n      },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  },
  {
    "type": "get",
    "url": "/produto",
    "title": "Busca todos os Produtos",
    "name": "GetProduto",
    "group": "Produto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Todos os Produtos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\": 5,\n     \"nome\": \"Produto 1\",\n     \"garantia\": \"6 meses\",\n     \"grade\": \"0\",\n     \"fabricante\": {\n         \"id\": 3,\n         \"nome\": \"Fabricante 1\"\n     },\n     \"estoque\": [\n     {\n         \"id\": 1,\n         \"quantidade\": 51,\n         \"filial\": {\n             \"id\": 1,\n             \"nome\": \"Filial 1\"\n         }\n     },\n     {\n         \"id\": 5,\n         \"quantidade\": 10,\n         \"filial\": {\n             \"id\": 2,\n             \"nome\": \"Filial 2\"\n         }\n      }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  },
  {
    "type": "get",
    "url": "/produto/:id",
    "title": "Busca Produto por ID",
    "name": "GetProdutoById",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Produto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "response",
            "description": "<p>Todos os Produtos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"id\": 5,\n     \"nome\": \"Produto 1\",\n     \"garantia\": \"6 meses\",\n     \"grade\": \"0\",\n     \"fabricante\": {\n         \"id\": 3,\n         \"nome\": \"Fabricante 1\"\n     },\n     \"estoque\": [\n     {\n         \"id\": 1,\n         \"quantidade\": 51,\n         \"filial\": {\n             \"id\": 1,\n             \"nome\": \"Filial 1\"\n         }\n     },\n     {\n         \"id\": 5,\n         \"quantidade\": 10,\n         \"filial\": {\n             \"id\": 2,\n             \"nome\": \"Filial 2\"\n         }\n      }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  },
  {
    "type": "post",
    "url": "/produto",
    "title": "Adiciona novo Produto",
    "name": "PostProduto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fabricante",
            "description": "<p>ID do Fabricante</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "garantia",
            "description": "<p>Período de Garantia</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "grade",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Produto criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"id\": 1,\n        \"nome\": \"Produto 1\",\n        \"garantia\": \"6 meses\",\n        \"grade\": \"0\",\n        \"fabricante\": {\n            \"id\": 1,\n            \"nome\": \"Fabricante 1\"\n        },\n        \"estoque\": [\n        {\n            \"id\": 1,\n            \"quantidade\": 10,\n            \"filial\": {\n                \"id\": 1,\n                \"nome\": \"Filial 1\"\n            }\n        }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  },
  {
    "type": "put",
    "url": "/produto/:id",
    "title": "Atualiza Produto",
    "name": "PutProduto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "fabricante",
            "description": "<p>ID do Fabricante</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "garantia",
            "description": "<p>Período de Garantia</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "grade",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Produto atualizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"id\": 1,\n        \"nome\": \"Produto 1\",\n        \"garantia\": \"6 meses\",\n        \"grade\": \"0\",\n        \"fabricante\": {\n            \"id\": 1,\n            \"nome\": \"Fabricante 1\"\n        },\n        \"estoque\": [\n        {\n            \"id\": 1,\n            \"quantidade\": 10,\n            \"filial\": {\n                \"id\": 1,\n                \"nome\": \"Filial 1\"\n            }\n        }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem de Erro</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "web/index.php",
    "groupTitle": "Produto"
  }
] });
