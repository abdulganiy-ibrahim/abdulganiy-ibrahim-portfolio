type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, onClick, variant = 'secondary', size = 'medium', type = 'button', loading = false, disabled = false, className }: ButtonProps) {

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover border border-glow-border',
    secondary: 'bg-background text-foreground border border-border',
    danger: 'bg-red-500 text-white hover:bg-red-600 border border-red-500',
  }

  const sizeClasses  = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const isDisabled = disabled || loading;

  const baseClasses = `${variantClasses[variant]} ${sizeClasses[size]} rounded cursor-pointer ${className || ''}`;

  const disabledClasses = isDisabled
  ? "opacity-50 cursor-not-allowed"
  : "hover:opacity-90";

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseClasses} ${disabledClasses}`} 
      disabled={isDisabled}
    >
      {loading && (
        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
      )}
      {children}
    </button>
  )
}