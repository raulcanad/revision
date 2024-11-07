import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir el contexto y su tipo
interface UserContextType {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Definir el tipo de las props incluyendo children
interface UserProviderProps {
    children: ReactNode;
}

// Proveedor de contexto
const UserProvider = ({ children }: UserProviderProps) => {
    const [name, setName] = useState<string>('Guest');
    
    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
};

// Componente consumidor
const UserProfile: React.FC = () => {
    const userContext = useContext(UserContext);
    
    if (!userContext) throw new Error('UserProfile debe usarse dentro de UserProvider');

    const { name, setName } = userContext;

    return (
        <div>
            <p>Welcome, {name}!</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Change name"
            />
        </div>
    );
};

// Componente principal
const AppContext: React.FC = () => (
    <UserProvider>
        <UserProfile />
    </UserProvider>
);

export default AppContext;
