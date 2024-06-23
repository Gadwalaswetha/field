import React, { Component } from 'react';
import './App.css'; 
import InvoiceDetails from './components/InvoiceDetails';
import ActionHistory from './components/ActionHistory';
import FieldTemplateSearch from './components/FieldTemplateSearch';
import LineItemDetails from './components/LineItemDetails';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Invoice Management System</h1>
                <InvoiceDetails />
                <ActionHistory />
                <FieldTemplateSearch />
                <LineItemDetails />
            </div>
        );
    }
}

export default App;
