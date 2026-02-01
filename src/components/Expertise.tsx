import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faRobot } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "LangChain", "LlamaIndex", "Chroma", "FAISS", "Weaviate", "OpenAI API", "Hugging Face Hub", "Python", "FastAPI", "Celery", "Redis", "Postgres","Streamlit"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "PyTorch", "TensorFlow", "Hugging Face Transformers", "LoRA/PEFT", "DeepSpeed", "Accelerate", "PyTorch Lightning", "WandB", "Numpy", "CUDA", "NCCL"
];

const labelsThird = [
    "Triton Inference Server", "vLLM", "TensorRT", "ONNX Runtime", "TorchServe", "Docker", "Kubernetes", "Ray Serve", "FastAPI", "AWS SageMaker", "GCP Vertex AI"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>GenAI Systems, RAG & AI Agents</h3>
                    <p>I build end-to-end GenAI systems, including RAG pipelines and AI agents that integrate LLMs with tools, vector databases, and enterprise data.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Transformer Architectures & Model Training</h3>
                    <p>Design, train, and optimize transformer-based models with attention mechanisms, KV caching, efficient fine-tuning, and rigorous model benchmarking and evaluation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Model Deployment & Inference at Scale</h3>
                    <p>I am experienced in deploying large models for low-latency, high-throughput inference using pipeline parallelism, tensor parallelism, batching, and optimized inference engines.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;