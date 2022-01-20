using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace _21stMortgageInterviewApplication
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            int largest = 0;
            string [] nums = input.Text.Split('\u002C');
            
            foreach (string num  in nums)
            {
                if (Convert.ToInt32(num) > largest)
                    largest = Convert.ToInt32(num);

            }
            result.Text = Convert.ToString(largest);

        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            string[] nums = input.Text.Split('\u002C');
            int oddSum = 0;
            foreach (string num in nums)
            {
                if (Convert.ToInt32(num) % 2 != 0)
                {
                    oddSum = oddSum + Convert.ToInt32(num);
                }

            }
            result.Text = Convert.ToString(oddSum);

        }

        private void Button_Click_2(object sender, RoutedEventArgs e)
        {
            string[] nums = input.Text.Split('\u002C');
            int evenSum = 0;
            foreach (string num in nums)
            {
                if (Convert.ToInt32(num) % 2 == 0)
                {
                    evenSum = evenSum + Convert.ToInt32(num);
                }

            }
            result.Text = Convert.ToString(evenSum);
        }
    }
}
