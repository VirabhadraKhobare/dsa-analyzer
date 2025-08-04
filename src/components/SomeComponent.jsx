// filepath: src/components/SomeComponent.jsx
import { useAuth } from '../hooks/useAuth'; // New import path

function SomeComponent() {
  const { user } = useAuth();

  return (
    <div>
      {/* Example usage of user variable */}
      {user ? <span>Welcome, {user.displayName || user.email}!</span> : <span>Please sign in.</span>}
    </div>
  );
}

export default SomeComponent;