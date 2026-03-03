
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('formPromocao');
    const modal = document.getElementById('modalSucesso');
    const campoCodigo = document.getElementById('codigo');
    const campoCpf = document.getElementById('cpf');
    const campoData = document.getElementById('data');
    const campoNome = document.getElementById('nome');

    // --- MÁSCARAS DE INPUT ---

    // Máscara para CPF (000.000.000-00)
    campoCpf.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\={10})/, ""); // Limita caracteres
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = v;
    });

    // Máscara para Data (00/00/0000)
    campoData.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
        v = v.replace(/(\d{2})(\d)/, "$1/$2");
        e.target.value = v;
    });

    // --- FUNÇÕES PRINCIPAIS ---

    window.fecharModal = function() {
        modal.style.display = 'none';
        form.reset();
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validações
        const cpfValido = campoCpf.value.replace(/\D/g, "").length === 11;
        const nomeValido = campoNome.value.trim().split(' ').length >= 2;
        const dataValida = campoData.value.length === 10;
        const codigoValido = campoCodigo.value.length === 13;

        if (!nomeValido) {
            alert('Por favor, digite seu nome completo.');
            return;
        }

        if (!cpfValido) {
            alert('CPF inválido. Verifique os números.');
            return;
        }

        if (!dataValida) {
            alert('Data de nascimento incompleta.');
            return;
        }

        if (!codigoValido) {
            alert('O código de barras deve ter 13 dígitos.');
            return;
        }

        // Se passar por tudo:
        modal.style.display = 'flex';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            fecharModal();
        }
    };
    });