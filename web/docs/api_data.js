define({ "api": [
  {
    "type": "DELETE",
    "url": "/fabricante/:id",
    "title": "Remove Fabricante por ID",
    "name": "DeleteFabricante",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "Bolean",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
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
            "type": "Boelan",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
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
    "type": "GET",
    "url": "/fabricante",
    "title": "Busca todos os Fabricantes",
    "name": "GetFabricante",
    "group": "Fabricante",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bolean",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
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
    "type": "GET",
    "url": "/fabricante/:id",
    "title": "Busca Fabricante por ID",
    "name": "GetFabricanteById",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "Bolean",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
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
            "type": "String",
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
    "type": "POST",
    "url": "/fabricante",
    "title": "Adiciona novo Fabricante",
    "name": "PostFabricante",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bome",
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
            "type": "Bolean",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
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
            "type": "String",
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
    "type": "PUT",
    "url": "/fabricante/:id",
    "title": "Atualiza Fabricante por ID",
    "name": "PutFabricante",
    "group": "Fabricante",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID Unico do Fabricante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
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
            "type": "Bolean",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
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
            "type": "Boelan",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
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
    "type": "GET",
    "url": "/produto",
    "title": "Busca todos os Produtos",
    "name": "GetProduto",
    "group": "Produto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Bolean",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
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
    "type": "GET",
    "url": "/produto/:id",
    "title": "Busca Produto por ID",
    "name": "GetProdutoById",
    "group": "Produto",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
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
    "type": "POST",
    "url": "/produto",
    "title": "Adiciona novo Produto",
    "name": "PostProduto",
    "group": "Produto",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do Produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fabricante_id",
            "description": "<p>ID do Fabricante</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "garantia",
            "description": "<p>Período de Garantia</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "grade",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "estoque",
            "description": "<p>Estoque por Filial</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "estoque.filial",
            "description": "<p>ID da Filial</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "estoque.quantidade",
            "description": "<p>Quantidade</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Dados do Produto criado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"nome\": \"Produto 1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>0</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
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
