package autoberlo.autoberlo.model;

/**
 * Enumeration representing the various permissions available in the system.
 * <p>
 * These permissions can be assigned to users to control access to different
 * operations within the car rental application, such as managing users,
 * handling loans, and modifying car data.
 * </p>
 *
 * <ul>
 *     <li>{@code UPDATE_USER} – Allows updating user data</li>
 *     <li>{@code READ_USER} – Allows reading user data</li>
 *     <li>{@code LIST_LOANS} – Allows listing all loan records</li>
 *     <li>{@code CREATE_LOAN} – Allows creating new loan entries</li>
 *     <li>{@code CREATE_CAR} – Allows adding new cars to the system</li>
 *     <li>{@code UPDATE_CAR} – Allows modifying existing car information</li>
 *     <li>{@code DELETE_CAR} – Allows removing cars from the system</li>
 * </ul>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public enum Permission {
        UPDATE_USER,
        READ_USER,
        LIST_LOANS,
        CREATE_LOAN,
        CREATE_CAR,
        UPDATE_CAR,
        DELETE_CAR
}
