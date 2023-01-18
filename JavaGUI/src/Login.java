import java.awt.EventQueue;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
import javax.swing.SwingConstants;
import javax.swing.border.EmptyBorder;

public class Login extends JFrame {

	private JPanel contentPane;
	private JTextField textField;
	private JPasswordField passwordField;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Login frame = new Login();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public Login() {
		setTitle("LABSECURE - LOGIN");
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 595, 604);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		
		JLabel lblNewLabel = new JLabel("LOGIN");
		lblNewLabel.setBounds(10, 10, 561, 40);
		lblNewLabel.setFont(new Font("Tahoma", Font.PLAIN, 20));
		lblNewLabel.setHorizontalAlignment(SwingConstants.CENTER);
		
		JLabel lblPrn = new JLabel("PRN :");
		lblPrn.setBounds(37, 166, 249, 40);
		lblPrn.setHorizontalAlignment(SwingConstants.RIGHT);
		lblPrn.setFont(new Font("Tahoma", Font.PLAIN, 20));
		
		JLabel lblPassword = new JLabel("Password :");
		lblPassword.setBounds(37, 216, 249, 40);
		lblPassword.setHorizontalAlignment(SwingConstants.RIGHT);
		lblPassword.setFont(new Font("Tahoma", Font.PLAIN, 20));
		
		textField = new JTextField();
		textField.setBounds(296, 174, 189, 26);
		textField.setFont(new Font("Tahoma", Font.PLAIN, 18));
		textField.setColumns(10);
		
		passwordField = new JPasswordField();
		passwordField.setBounds(296, 224, 189, 26);
		passwordField.setFont(new Font("Tahoma", Font.PLAIN, 18));
		
		JButton btnNewButton = new JButton("Login");
		btnNewButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				System.out.println(textField.getText());
				System.out.println(passwordField.getText());
			}
		});
		btnNewButton.setBounds(250, 371, 90, 32);
		btnNewButton.setFont(new Font("Tahoma", Font.PLAIN, 15));
		
		
		contentPane.setLayout(null);
		contentPane.add(lblNewLabel);
		contentPane.add(lblPrn);
		contentPane.add(lblPassword);
		contentPane.add(textField);
		contentPane.add(btnNewButton);
		contentPane.add(passwordField);
	}
}
