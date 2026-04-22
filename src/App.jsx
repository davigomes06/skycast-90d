import { useState } from "react";
import axios from "axios";
import { Search, Sun, Cloud, CloudRain, Wind, Droplets, Thermometer } from "lucide-react";
import "./App.css";

// 1. Função de Ícones
const retornarIcone = (clima) => {
  switch (clima) {
    case "Clear": return <Sun size={60} color="#ffcf4d" />;
    case "Clouds": return <Cloud size={60} color="#fff" />;
    case "Rain": return <CloudRain size={60} color="#a4b0be" />;
    case "Drizzle": return <CloudRain size={60} color="#81ecec" />;
    case "Thunderstorm": return <CloudRain size={60} color="#f1c40f" />;
    default: return <Sun size={60} color="#ffcf4d" />;
  }
};

export default function App() {
  const [cidade, setCidade] = useState("");
  const [previsao, setPrevisao] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const API_KEY = "76d590143a74fcf268184c0e2c58130a"; 

  const buscarClima = async () => {
    if (!cidade) return;
    setCarregando(true);
    setErro("");
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`;
      const resposta = await axios.get(url);
      setPrevisao(resposta.data);
      setCidade(""); 
    } catch (err) {
      setErro("Cidade não encontrada ou erro na conexão. 😕");
      setPrevisao(null);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={`clima-container ${previsao?.main.temp > 25 ? 'quente' : 'frio'}`}>
      
      <div className="busca-box">
        <input 
          type="text" 
          placeholder="Ex: São Paulo, Tokyo..." 
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && buscarClima()}
        />
        <button onClick={buscarClima} disabled={carregando}>
          {carregando ? "..." : <Search size={20} />}
        </button>
      </div>

      {carregando && <p className="carregando">Buscando clima...</p>}
      {erro && <p className="erro-msg">{erro}</p>}

      {previsao && (
        <div className="info-card">
          <h2 className="cidade-nome">{previsao.name}, {previsao.sys.country}</h2>
          
          <div className="temp-principal">
            {retornarIcone(previsao.weather[0].main)} 
            <h1>{Math.round(previsao.main.temp)}°C</h1>
          </div>

          <p className="descricao">{previsao.weather[0].description}</p>

          <div className="detalhes-grid">
            <div className="detalhe-item">
              <Droplets size={20} />
              <span>Umidade: {previsao.main.humidity}%</span>
            </div>
            <div className="detalhe-item">
              <Wind size={20} />
              <span>Vento: {previsao.wind.speed} km/h</span>
            </div>
            <div className="detalhe-item">
              <Thermometer size={20} />
              <span>Sensação: {Math.round(previsao.main.feels_like)}°C</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}