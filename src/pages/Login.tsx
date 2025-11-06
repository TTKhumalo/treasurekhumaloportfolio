import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { Mail } from 'lucide-react';

const Login = () => {
  const { user, isAdmin, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && isAdmin) {
      navigate('/admin');
    }
  }, [user, isAdmin, loading, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Sign in with your authorized Google account to access the admin panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={signInWithGoogle}
            className="w-full"
            size="lg"
            disabled={loading}
          >
            <Mail className="mr-2 h-5 w-5" />
            Sign in with Google
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Only authorized administrators can access the admin panel
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
