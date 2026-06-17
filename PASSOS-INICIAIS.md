<style>
a {
    text-decoration: none;
    color: #464feb;
}
tr th, tr td {
    border: 1px solid #e6e6e6;
}
tr th {
    background-color: #f5f5f5;
}
</style>

## ✅ Etapas a seguir

### **1. Clonar o repositório base**

Clone o repositório abaixo:

**Repositório:**

`edymonte/site-academia` — *Academia FitCode: site com benefícios do esporte, modalidades e patrocinadores.*

```bash
git clone https://github.com/edymonte/site-academia
```

---

### **2. Criar o repositório do seu projeto no GitHub**

- Crie um novo repositório público no GitHub com o nome do seu site

> **Substitua `site-participante` pelo nome real do seu projeto**

```bash
gh repo create site-participante --public
```

- Em seguida, clone-o localmente — este será o **segundo diretório**:

```bash
git clone https://github.com/<seu-usuario>/site-participante
```

---

### **3. Copiar a estrutura base para o segundo diretório**

Copie os seguintes itens do repositório base para dentro de `site-participante/`:

```bash
cp -r site-academia/.github/workflows  site-participante/.github/workflows
cp -r site-academia/setup              site-participante/
cp -r site-academia/evidencias         site-participante/
cp    site-academia/PARTICIPANTE.md    site-participante/
```

> **Observação:** Copiamos apenas o `workflows/` do `.github/` — o restante da pasta será construído **pilar por pilar** durante o workshop.

---

### **4. Desenvolver seu próprio site**

- Desenvolva seu site dentro do diretório `site-participante/`
- Utilize a tecnologia de sua preferência

> 
> **Importante:**
> 
> Os diretórios `setup`, `evidencias`, `.github` e o arquivo `PARTICIPANTE.md` **devem permanecer no projeto**
> 

---

### **5. Criar as branches de trabalho**

Com o repositório configurado, crie as branches do time:

```bash
cd site-participante

git checkout -b feature/dev      && git push origin feature/dev
git checkout -b feature/qa       && git push origin feature/qa
git checkout -b feature/suporte  && git push origin feature/suporte
git checkout main
```

---

### **6. Estrutura final esperada**

```
site-participante/
├── .github/
│   └── workflows/        ← CI/CD (copiado do base)
├── setup/                ← gerador de evidências
├── evidencias/           ← HTMLs gerados
├── PARTICIPANTE.md
└── <seu site aqui>
```

---

### **7. Próximos passos**

Após a conclusão de todas as etapas acima, seguiremos com a implementação dos **pilares de Governança**.
