import React, { useState, useMemo } from 'react';

/**
 * Composant de tableau avec recherche et tri
 * @param {Object} props
 * @param {Array} props.data - Tableau d'objets représentant les lignes
 * @param {Array} props.columns - Tableau d'objets { key, label } pour les colonnes
 * @param {string} props.title - Titre du tableau (optionnel)
 */
const SearchableSortableTable = ({ data, columns, title }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Filtrer les données en fonction du terme de recherche
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return data.filter(row => 
      columns.some(col => {
        const value = row[col.key];
        return value && value.toString().toLowerCase().includes(lowerSearchTerm);
      })
    );
  }, [data, searchTerm, columns]);

  // Trier les données
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key] || '';
      const bValue = b[sortConfig.key] || '';
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Gérer le clic sur l'en-tête de colonne pour le tri
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Obtenir l'icône de tri pour une colonne
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div style={{ margin: '20px 0' }}>
      {title && (
        <h3 style={{ marginBottom: '15px' }}>{title}</h3>
      )}
      
      {/* Barre de recherche */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="🔍 Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            width: '100%',
            maxWidth: '400px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Tableau */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f6f8fa' }}>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => requestSort(col.key)}
                  style={{
                    padding: '12px',
                    textAlign: 'left',
                    borderBottom: '2px solid #e0e0e0',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>{col.label}</span>
                    <span style={{ opacity: 0.6 }}>{getSortIcon(col.key)}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: '1px solid #e0e0e0',
                    backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafafa',
                  }}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      style={{
                        padding: '12px',
                        textAlign: 'left',
                      }}
                      // Permet de trier en cliquant sur une cellule (optionnel)
                      onClick={() => requestSort(col.key)}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
                  Aucun résultat trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Afficher le nombre de résultats */}
      <div style={{ marginTop: '10px', color: '#666', fontSize: '13px' }}>
        {sortedData.length} résultat(s) sur {data.length} au total
      </div>
    </div>
  );
};

export default SearchableSortableTable;
