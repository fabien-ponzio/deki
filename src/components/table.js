import filterButton from "./filterButton";

function table(params) {
    // je fais de ce tableau un composant réutilisable
    return(
    <section>
        <table>
            <thead>
                <th>Statut</th>
                <th>N° Commande</th>
                <th>Livreur</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Adresse de Livraison</th>
                <th>Heure de livraison</th>
                <th>Action</th>            
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{filterButton("Modifier")}</td>
                    <td>{filterButton("Supprimer")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{filterButton("Modifier")}</td>
                    <td>{filterButton("Supprimer")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{filterButton("Modifier")}</td>
                    <td>{filterButton("Supprimer")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{filterButton("Modifier")}</td>
                    <td>{filterButton("Supprimer")}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{filterButton("Modifier")}</td>
                    <td>{filterButton("Supprimer")}</td>
                </tr>
            </tbody>
        </table>
    </section>
    );
}

export default table;

