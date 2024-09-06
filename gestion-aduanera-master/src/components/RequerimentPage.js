import React, { useState } from "react";
import "../style/requerimiento.css";
import { aduanas, statements, terminals } from "../data/data";
import Modal from "./Modal";

export default function RequerimentPage({ userAthenticated }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [requirementsForm, setRequirementsForm] = useState({
    cliente: userAthenticated.client.toUpperCase(),
    customer: userAthenticated.customer,
    observaciones: "",
    viaTransporte: "",
    etd: "",
    eta: "",
    descripcion: "",
    referencia: "",
    aduana: "",
    terminal: "",
    regimen: "",
  });

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleChange = (e) => {
    setRequirementsForm({
      ...requirementsForm,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="requeriment">
      <div className="browser-frame">
        <div className="browser-header">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="title">S&S WEB</span>
        </div>
        <div className="browser-content">
          <h1>REQUERIMIENTO DE ATENCIÓN ADUANERA</h1>
          <form id="requerimientoForm" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cliente">CLIENTE</label>
                <input
                  type="text"
                  id="cliente"
                  name="cliente"
                  required
                  value={userAthenticated.client.toUpperCase()}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="aduana">ADUANA</label>
                <select
                  id="aduana"
                  name="aduana"
                  required
                  onChange={handleChange}
                  value={requirementsForm.aduana}
                  className="select"
                >
                  <option value="">Selecciona una opción</option>
                  {aduanas.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="terminal">
                  TERMINAL PORTUARIO / DEPÓSITO TEMPORAL
                </label>
                <select
                  id="terminal"
                  name="terminal"
                  required
                  onChange={handleChange}
                  value={requirementsForm.terminal}
                  className="select"
                >
                  <option value="">Selecciona una opción</option>
                  {terminals.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customer">CUSTOMER</label>
                <input
                  type="text"
                  id="customer"
                  name="customer"
                  required
                  value={userAthenticated.customer}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label htmlFor="regimen">RÉGIMEN</label>
                <select
                  id="regimen"
                  name="regimen"
                  required
                  onChange={handleChange}
                  value={requirementsForm.regimen}
                  className="select"
                >
                  <option value="">Selecciona una opción</option>
                  {statements.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="observaciones">OBSERVACIONES</label>
                <textarea
                  id="observaciones"
                  name="observaciones"
                  rows="3"
                  value={requirementsForm.observaciones}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <h3>TRANSPORTE</h3>
                <input
                  type="text"
                  placeholder="VÍA TRANSPORTE"
                  id="viaTransporte"
                  required
                  value={requirementsForm.viaTransporte}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="ETD"
                  required
                  id="etd"
                  value={requirementsForm.etd}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="ETA"
                  required
                  id="eta"
                  value={requirementsForm.eta}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <h3>DOCUMENTOS</h3>
                <div className="file-upload-group">
                  <div className="file-upload">
                    <label htmlFor="factura">FACTURA COMERCIAL</label>
                    <input
                      type="file"
                      id="factura"
                      name="factura"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="packing">PACKING LIST</label>
                    <input
                      type="file"
                      id="packing"
                      name="packing"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="traduccion">TRADUCCIÓN DE FACTURA</label>
                    <input
                      type="file"
                      id="traduccion"
                      name="traduccion"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="transporte">DOCUMENTO DE TRANSPORTE</label>
                    <input
                      type="file"
                      id="transporte"
                      name="transporte"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="origen">CERTIFICADO DE ORIGEN</label>
                    <input
                      type="file"
                      id="origen"
                      name="origen"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="poliza">PÓLIZA</label>
                    <input
                      type="file"
                      id="poliza"
                      name="poliza"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="control">DOCUMENTOS DE CONTROL</label>
                    <input
                      type="file"
                      id="control"
                      name="control"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                  <div className="file-upload">
                    <label htmlFor="otros">OTROS</label>
                    <input
                      type="file"
                      id="otros"
                      name="otros"
                      accept=".pdf,.doc,.docx,.jpg,.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <h3>MERCANCÍA</h3>
                <input
                  type="text"
                  placeholder="DESCRIPCIÓN"
                  id="descripcion"
                  required
                  value={requirementsForm.descripcion}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="REFERENCIA"
                  required
                  id="referencia"
                  value={requirementsForm.referencia}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group logo-button">
                <img
                  src="/Imagenes/Logo.png"
                  alt="Grupo S&S Logo"
                  className="logo"
                />
                <input
                  type="submit"
                  value={"SOLICITAR"}
                  className="button-login"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        requirementsForm={requirementsForm}
        setRequirementsForm={setRequirementsForm}
        userAthenticated={userAthenticated}
      />
    </div>
  );
}
