import React, { useState } from "react";
import "../style/modal.css";

export default function Modal({
  isVisible,
  onClose,
  requirementsForm,
  setRequirementsForm,
  userAthenticated,
}) {
  const randomFourDigits = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const [orderNumber, setOrderNumber] = useState(randomFourDigits());

  const onClickConfirmation = () => {
    setRequirementsForm({
      ...requirementsForm,
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

    onClose();
    alert(`Orden ${orderNumber} de requerimiento generada con éxito`);
    setOrderNumber(randomFourDigits());
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>S&S WEB</h2>
        </div>
        <div className="modal-body">
          <img src="/Imagenes/Logo.png" alt="S&S Logo" className="modal-logo" />
          <h3>APERTURA NRO DE ORDEN {orderNumber}</h3>
          <div className="modal-details">
            <p>DETALLES DE REQUERIMIENTO</p>
            <div className="modal-details-row">
              <div className="modal-details-col">
                <p>CLIENTE</p>
                <input type="text" value={requirementsForm.cliente} readOnly />
              </div>
              <div className="modal-details-col">
                <p>ADUANA</p>
                <input type="text" value={requirementsForm.aduana} readOnly />
              </div>
              <div className="modal-details-col">
                <p>TERMINAL PORTUARIO</p>
                <input type="text" value={requirementsForm.terminal} readOnly />
              </div>
              <div className="modal-details-col">
                <p>CUSTOMER</p>
                <input type="text" value={requirementsForm.customer} readOnly />
              </div>
              <div className="modal-details-col">
                <p>RÉGIMEN</p>
                <input type="text" value={requirementsForm.regimen} readOnly />
              </div>
              {requirementsForm.observaciones && (
                <div className="modal-details-col">
                  <p>OBSERVACIONES</p>
                  <input
                    type="text"
                    value={requirementsForm.observaciones}
                    readOnly
                  />
                </div>
              )}
              <div className="modal-details-col">
                <p>VÍA TRANSPORTE</p>
                <input
                  type="text"
                  value={requirementsForm.viaTransporte}
                  readOnly
                />
              </div>
              <div className="modal-details-col">
                <p>ETD</p>
                <input type="text" value={requirementsForm.etd} readOnly />
              </div>
              <div className="modal-details-col">
                <p>ETA</p>
                <input type="text" value={requirementsForm.eta} readOnly />
              </div>
              <div className="modal-details-col">
                <p>DESCRIPCIÓN MERCANCÍA</p>
                <input
                  type="text"
                  value={requirementsForm.descripcion}
                  readOnly
                />
              </div>
              <div className="modal-details-col">
                <p>REFERENCIA</p>
                <input
                  type="text"
                  value={requirementsForm.referencia}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-retornar" onClick={onClose}>
            RETORNAR
          </button>
          <button className="btn-confirmar" onClick={onClickConfirmation}>
            CONFIRMAR
          </button>
        </div>
      </div>
    </div>
  );
}
